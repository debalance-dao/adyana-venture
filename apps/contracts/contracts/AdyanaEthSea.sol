// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.6;

import "./SafeMath.sol";

interface ERC20Interface {
    function totalSupply() external view returns (uint);

    function balanceOf(address tokenOwner) external view returns (uint balance);

    function transfer(address to, uint tokens) external returns (bool success);

    event Transfer(address indexed from, address indexed to, uint tokens);
}

contract AdyanaToken is ERC20Interface {
    using SafeMath for uint256;

    uint public override totalSupply;
    string public symbol;
    string public name;
    uint8 public decimals = 0;
    address public owner;
    uint256 public constant tokenPrice = 1 gwei;
    uint public totalProject;

    uint public constant APR_30 = 10;
    uint public constant APR_60 = 12;
    uint public constant APR_90 = 14;
    uint public constant APR_180 = 16;
    uint public constant APR_365 = 20;
    uint public constant APR_730 = 25;

    struct Project {
        string name;
        string description;
        uint raisedAmount;
        uint totalVoters;
    }

    struct Stake {
        uint amount;
        uint timestamp;
        uint period;
        bool isActive;
    }

    mapping(address => uint) public balances;
    mapping(uint => Project) public projectList;
    mapping(address => Stake[]) public stakes;

    event Withdrawal(address indexed to, uint amount);

    constructor(uint _totalSupply) {
        symbol = "ADY";
        totalSupply = _totalSupply;
        name = "Adyana";
        owner = msg.sender;
        balances[msg.sender] = balances[msg.sender].add(_totalSupply);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier onlyHolder() {
        require(balances[msg.sender] > 0, "you're not an ADY token holder");
        _;
    }

    function balanceOf(
        address _tokenOwner
    ) public view override returns (uint) {
        return balances[_tokenOwner];
    }

    function transfer(
        address _to,
        uint _amount
    ) public override returns (bool) {
        require(balances[msg.sender] >= _amount, "insufficient balance!");
        balances[_to] = balances[_to].add(_amount);
        balances[msg.sender] = balances[msg.sender].sub(_amount);
        emit Transfer(msg.sender, _to, _amount);
        return true;
    }

    receive() external payable {
        require(msg.value >= tokenPrice, "Minimum price is 1 gwei!");

        uint256 tokensToPurchase = (msg.value / tokenPrice);
        require(balances[owner] >= tokensToPurchase, "Not enough tokens available");

        balances[msg.sender] = balances[msg.sender].add(tokensToPurchase);
        balances[owner] = balances[owner].sub(tokensToPurchase);
    }

    function deposit() external payable {
        require(msg.value >= tokenPrice, "Minimum price is 1 gwei!");

        uint256 tokensToPurchase = (msg.value / tokenPrice);
        require(balances[owner] >= tokensToPurchase, "Not enough tokens available");

        balances[msg.sender] = balances[msg.sender].add(tokensToPurchase);
        balances[owner] = balances[owner].sub(tokensToPurchase);
    }

    function invest(uint _amount, uint _projectNum) public onlyHolder {
        require(totalProject > 0, "no project to vote!");
        balances[msg.sender] = balances[msg.sender].sub(_amount);
        Project storage thisProject = projectList[_projectNum];
        thisProject.raisedAmount = thisProject.raisedAmount.add(_amount);
    }

    function stakeTokens(uint _amount, uint _periodInSeconds) public onlyHolder {
        require(balances[msg.sender] >= _amount, "insufficient balance!");
        require(
            _periodInSeconds == 30 days || _periodInSeconds == 60 days || _periodInSeconds == 90 days ||
            _periodInSeconds == 180 days || _periodInSeconds == 365 days || _periodInSeconds == 730 days,
            "invalid staking period!"
        );

        balances[msg.sender] = balances[msg.sender].sub(_amount);
        stakes[msg.sender].push(Stake({
            amount: _amount,
            timestamp: block.timestamp,
            period: _periodInSeconds,
            isActive: true
        }));
    }

    function unstakeTokens(uint _stakeIndex) public onlyHolder {
        require(_stakeIndex < stakes[msg.sender].length, "invalid stake index!");

        Stake storage userStake = stakes[msg.sender][_stakeIndex];
        require(userStake.isActive, "stake is already inactive!");
        require(
            block.timestamp >= userStake.timestamp + userStake.period,
            "staking period not yet over!"
        );

        uint amount = userStake.amount;
        uint reward = calculateStakingReward(userStake.amount, userStake.period);
        userStake.isActive = false;
        balances[msg.sender] = balances[msg.sender].add(amount).add(reward);
    }

    function viewStakedTokens(address _staker) public view returns (uint) {
        uint totalStaked = 0;
        for (uint i = 0; i < stakes[_staker].length; i++) {
            if (stakes[_staker][i].isActive) {
                totalStaked = totalStaked.add(stakes[_staker][i].amount);
            }
        }
        return totalStaked;
    }

    function viewStakeDetails(address _staker, uint _stakeIndex) public view returns (uint, uint, uint, bool) {
        require(_stakeIndex < stakes[_staker].length, "invalid stake index!");
        Stake storage userStake = stakes[_staker][_stakeIndex];
        return (userStake.amount, userStake.timestamp, userStake.period, userStake.isActive);
    }

    function calculateStakingReward(uint _amount, uint _period) internal pure returns (uint) {
        uint apr;
        if (_period == 30 days) {
            apr = APR_30;
        } else if (_period == 60 days) {
            apr = APR_60;
        } else if (_period == 90 days) {
            apr = APR_90;
        } else if (_period == 180 days) {
            apr = APR_180;
        } else if (_period == 365 days) {
            apr = APR_365;
        } else if (_period == 730 days) {
            apr = APR_730;
        } else {
            revert("invalid staking period!");
        }
        return (_amount.mul(apr).mul(_period)).div(365 days * 100);
    }

    function withdrawEther(address payable _to, uint _amount) external onlyOwner {
        require(_amount <= address(this).balance, "insufficient contract balance");
        _to.transfer(_amount);
        emit Withdrawal(_to, _amount);
    }
}
