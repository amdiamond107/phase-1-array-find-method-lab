// code your solution here
// superbowlWin = (record) => {
//     const result = record.find( record => record.result === "W" );
//     return !!result ? result.year : undefined;
//   }

function superbowlWin(records) {
    const result = records.find(record => record.result === "W");
    if (result) {
        return result.year
    }
    else {return undefined};
};