// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    chrome.tabs.executeScript({
      code: 'var x = document.getElementsByClassName("linenumber");var i; for(i = 0; i < x.length; i++){x[i].style.visibility = "hidden"}'
    });
  }
})