(()=>{ let css=`
.tg_head_split {
  max-width: 100% !important;
}

.im_page_wrap {
  max-width: 100% !important;
}

.im_dialogs_col_wrap {
  width: 320px !important;
}

.im_history_col_wrap {
  width: calc(100% - 320px) !important;
}

.im_message_wrap {
  max-width: inherit !important;
}

.im_message_body {
  max-width: 580px !important;
}
`;

var ss = document.createElement("style");
ss.type = "text/css"; ss.innerHTML = css;
document.getElementsByTagName("head")[0].appendChild(ss); })();
