const electionVotes = [
    'Harry', 'Rick', 'Ben', 'Ben', 'Harry', 'Ashley',
    'Connor', 'Rick', 'Ashley', 'Rick', 'Albert', 'Ben',
    'Michael', 'Rick', 'Albert', 'Karen', 'Harry',
    'Karen', 'Donna', 'Ashley', 'Albert', 'Harry',
    'Dane', 'Dane', 'Rick', 'Donna', 'Montimer'
]

const tallyVotes = votes => {
    const votesOfEachCandidate = votes.reduce((acc, e) => ({
        ...acc,
        [e]: acc[e] ? acc[e] + 1 : 1
    })
    , {});
    console.log(votesOfEachCandidate);
    return;
}

tallyVotes(electionVotes);
