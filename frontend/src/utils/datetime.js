const getReadableTimestamp = (datetime) => {
    const d = new Date(datetime);
    const pad = (n,s=2) => (`${new Array(s).fill(0)}${n}`).slice(-s);
    return `${pad(d.getFullYear(),4)}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

const dateToReadableString = (d) => {
    d = new Date(d);
    const month = d.toLocaleString('default', { month: 'long' });
    const date = d.getDate();
    const year = d.getFullYear();
    return `${month} ${date} ${year}`;
}

const timeToReadableString = (d) => {
    d = new Date(d);
    const time = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    return time.padStart(8, "0");
}

const datetimeUtils = {
    getReadableTimestamp,
    dateToReadableString,
    timeToReadableString
}

export default datetimeUtils;