const menuContainer = document.getElementById('menuContainer');
const search = document.getElementById('search')
let menus;

async function loadRMUTPMenu() {
    try {
        let response = await fetch('menu.json');
        menus = await response.json();

        console.log("ได้เมนูมาแล้ว!", menus);
        menuContainer.innerHTML = '';

        menus.forEach((item) => {
            let cardHTML = `
                <div class="menu-card">
                    <div class="store-name">${item.storeName}</div>
                    <div class="menu-name">${item.icon} ${item.menuName}</div>
                    <div class="price">${item.price} บาท</div>
                </div>`;
            menuContainer.innerHTML += cardHTML;
        });

    } catch (error) {
        console.log("พังจ้า: ", error);
        menuContainer.innerHTML = '<h2>ขออภัย ระบบขัดข้อง 😭</h2>';
    }
}
loadRMUTPMenu();

search.addEventListener('input', () => {
    let searchbar = menus.filter((item) => item.menuName.includes(search.value));
    console.log(searchbar)

    menuContainer.innerHTML = '';
    searchbar.forEach((item) => {
        let cardHTML = `
                <div class="menu-card">
                    <div class="store-name">${item.storeName}</div>
                    <div class="menu-name">${item.icon} ${item.menuName}</div>
                    <div class="price">${item.price} บาท</div>
                </div>`;
        menuContainer.innerHTML += cardHTML;
    });
});