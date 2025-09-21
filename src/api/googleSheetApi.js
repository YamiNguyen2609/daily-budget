
//https://yaminguyen2609.github.io/daily-budget/?id=1e_0ZOqgmR_2joRN7hamg4gkrRSc3HJ80fuwOHU4KChQ&token=AIzaSyAaNgl_-BgVCyA7RpimaXKzeqyQBiiZPj0
async function fetchGoogleSheetData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const token = params.get("token");
    const range = 'Living Expenses!A:D'
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${token}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.values) {
        return data.values;
        } else {
        throw new Error("Không có dữ liệu hoặc sai cấu hình API.");
        }
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ Google Sheet:", error);
        throw error;
    }
}

async function fetchGoogleSheetDataOverview() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const token = params.get("token");
    const range = 'Overview!A15:M37'
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${token}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.values) {
        return data.values;
        } else {
        throw new Error("Không có dữ liệu hoặc sai cấu hình API.");
        }
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ Google Sheet:", error);
        throw error;
    }
}

export async function GetDataOverview(month, year) {
    console.log("month", month);
    const data = await fetchGoogleSheetDataOverview();
    var columns = data[0];
    var result = {};
    console.log("data", data);
    for(var i = 1; i < columns.length; i++) {
        let item = [];
        for(var j = 1; j < data.length; j++) {
            var row = data[j];
            item.push({"name": row[0], "value": row[i]});
        }
        result[columns[i]] = item;
    }
    console.log("result", result);
    console.log("result1", result[month]);
    return result[month];
}