export default function dateFormatter(day, month, year) {
    day = day < 10 ? "0" + day : day
    month = month < 10 ? "0" + month : month;
    return `${day}/${month}/${year}`;
}