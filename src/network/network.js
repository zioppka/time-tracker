export async function createBusiness(data) {
    await fetch('http://localhost:3001/tracker', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
    });
}
export async function getBusinessToday() {
    const resp = await fetch('http://localhost:3001/tracker');
    return resp.json();
}
