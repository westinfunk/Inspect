export const getAccounts = async function() {
    const accounts = accounts;
    return accounts;
}


export const getAccount = async function(id) {
    // const accounts = await getAccounts();
    const account = await accounts.filter(account => account.id == id);
    return account.length ? account[0] : null;
}


const accounts = [
    {
        id: 328,
        name: "Bob Daw",
        address: "4982 Ocean",
        city: "San Clemente",
        state: "CA",
        email: "bobdaw@gmail.com",
        company: "BuilderCo Inspections"
    }
]