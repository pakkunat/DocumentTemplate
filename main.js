/**
 * main
 */
function main() {
  // ドキュメントを新規作成
  let document = DocumentApp.create("テンプレート");

  // ドキュメントにテンプレートを挿入
  let body = document.getBody();
  body.insertParagraph(0, "タイトル").setHeading(DocumentApp.ParagraphHeading.TITLE);
  body.insertParagraph(1, "サブタイトル").setHeading(DocumentApp.ParagraphHeading.SUBTITLE);
  body.insertParagraph(2, Utilities.formatString("最終更新日 %s", PApp.getJapanDate(new Date()))).setAlignment(DocumentApp.HorizontalAlignment.RIGHT);
  body.insertParagraph(3, "出典");
  body.insertParagraph(4, "リンク");
}
