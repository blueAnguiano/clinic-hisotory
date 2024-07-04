const calculateAge = (birth) => {
    let now = new Date();
    let date = new Date(birth);
    const diff = new Date(now - date);
    return Math.abs(diff.getUTCFullYear() - 1970);
}

module.exports = {
    calculateAge
}