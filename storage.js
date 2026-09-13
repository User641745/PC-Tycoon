// ==========================================
// CENTRAL STORAGE ROUTER & BRIDGE ENGINE
// ==========================================

const PC_STORAGE_KEY = 'pc_simulator_inventory';

// Saves a purchased component into the shared browser cache
function savePartToStorage(partName) {
    let currentVault = JSON.parse(localStorage.getItem(PC_STORAGE_KEY)) || [];
    if (!currentVault.includes(partName)) {
        currentVault.push(partName);
    }
    localStorage.setItem(PC_STORAGE_KEY, JSON.stringify(currentVault));
}

// Fetches the components out of the shared browser cache
function getPartsFromStorage() {
    return JSON.parse(localStorage.getItem(PC_STORAGE_KEY)) || [];
}
