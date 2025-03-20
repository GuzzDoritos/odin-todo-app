export default function dateFormatter(value) {
    const [year, month, day] = value.split("-")
    const date = new Date(year, Number.parseInt(month) - 1, day);
    return date;
}