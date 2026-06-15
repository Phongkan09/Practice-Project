const btn = document.getElementById('fetchBtn');
const text = document.getElementById('factText');

const URL = "https://catfact.ninja/fact"

const getCatfact = async () => {
    try {
        text.innerText = 'กำลังโหลด... ⏳'
        let api = await fetch(URL);
        let data = await api.json()

        console.log(data)

        text.innerText = data.fact;
    } catch (error) {
        console.log(error);
        text.innerText = 'เกิดข้อผิดพลาด ดึงข้อมูลไม่ได้ 😭'
    }
}
btn.addEventListener('click', getCatfact);