const PRINT_WINDOW_FEATURES = "width=1200,height=800";

/**
 * Opens a print preview in a new window and prints only selected content.
 */
export function printElementAsLandscapePdf(title: string, element: HTMLElement, tournamentDateRange?: string) {
  const printWindow = window.open("", "_blank", PRINT_WINDOW_FEATURES);
  if (!printWindow) {
    alert("Unable to open print window. Please allow popups for this site.");
    return;
  }

  const clone = element.cloneNode(true) as HTMLElement;
  clone.querySelectorAll(".wr-print-hide").forEach((node) => node.remove());
  clone.querySelectorAll(".wr-print-duplicate-title").forEach((node) => node.remove());
  const doc = printWindow.document;
  doc.title = title;

  while (doc.head.firstChild) doc.head.removeChild(doc.head.firstChild);
  while (doc.body.firstChild) doc.body.removeChild(doc.body.firstChild);

  const charsetMeta = doc.createElement("meta");
  charsetMeta.setAttribute("charset", "utf-8");
  doc.head.appendChild(charsetMeta);

  document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
    const copy = doc.createElement("link");
    const href = link.getAttribute("href");
    const rel = link.getAttribute("rel");
    if (href) copy.setAttribute("href", href);
    if (rel) copy.setAttribute("rel", rel);
    doc.head.appendChild(copy);
  });

  document.querySelectorAll("style").forEach((style) => {
    const copy = doc.createElement("style");
    copy.textContent = style.textContent;
    doc.head.appendChild(copy);
  });

  const printStyleTag = doc.createElement("style");
  printStyleTag.textContent = `
    @page {
      size: A4 landscape;
      margin: 10mm;
    }
    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      font-family: Arial, sans-serif;
      color: #111827;
    }
    .wr-print-hide {
      display: none !important;
    }
    .wr-print-header {
      margin-bottom: 12px;
    }
    .wr-print-title {
      font-size: 22px;
      font-weight: 700;
      margin: 0;
    }
    .wr-print-subtitle {
      font-size: 14px;
      margin: 4px 0 0;
      color: #374151;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #d1d5db;
      padding: 6px 8px;
      vertical-align: middle;
    }
    thead th {
      font-weight: 700;
    }
    .MuiPaper-root {
      box-shadow: none !important;
    }
    .MuiTableContainer-root {
      overflow: visible !important;
    }
    .MuiTable-root {
      table-layout: auto;
    }
  `;
  doc.head.appendChild(printStyleTag);

  const header = doc.createElement("header");
  header.className = "wr-print-header";
  const heading = doc.createElement("h1");
  heading.className = "wr-print-title";
  heading.textContent = title;
  header.appendChild(heading);
  if (tournamentDateRange) {
    const subtitle = doc.createElement("p");
    subtitle.className = "wr-print-subtitle";
    subtitle.textContent = tournamentDateRange;
    header.appendChild(subtitle);
  }

  doc.body.appendChild(header);
  doc.body.appendChild(clone);

  // Delay print slightly to ensure styles/layout are fully applied.
  printWindow.setTimeout(() => {
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  }, 300);
}
