function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var sheetName = data.sheet; // tên sheet gửi lên
    var values = data.values;   // dữ liệu

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName);

    if (!sheet) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: "error", message: "Sheet không tồn tại" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    sheet.appendRow(values);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "Đã ghi dữ liệu" })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
