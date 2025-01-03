export default function Random() {
    let random = Math.random() * 100;
    return <p>Random: {random.toFixed(0)}</p>;
}