import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const ExportExcelButton = (props) => {
  const handleExportExcel = () => {
    console.log(props.itemArray);
    const filename = `T3EX-Orders @ ${new Date().getMonth() +
      new Date().getDay()}.xlsx`;
    const sheetKey = [
      'URL',
      'ItemNumber',
      'Image(500px)',
      'Image(1000px)',
      'Name',
      'Price',
      'Shipping',
      'Condition',
    ];
    const sheetArray = [];
    props.itemArray.forEach((item) => {
      sheetArray.push([
        item.itemWebUrl,
        item.itemId,
        item.image !== undefined
          ? item.image.imageUrl.split('l225')[0] + 'l500.jpg'
          : '',
        item.image !== undefined
          ? item.image.imageUrl.split('l225')[0] + 'l1000.jpg'
          : '',
        item.title,
        item.price.value,
        item.shippingOptions[0].shippingCost.value,
        item.condition,
      ]);
    });
    const wsName = 'SheetJS';
    const wb = window.XLSX.utils.book_new();
    const ws = window.XLSX.utils.aoa_to_sheet([sheetKey, ...sheetArray]);
    window.XLSX.utils.book_append_sheet(wb, ws, wsName);
    window.XLSX.writeFile(wb, filename);
  };

  return (
    <Button
      icon
      labelPosition="left"
      inverted
      color="olive"
      size="large"
      onClick={handleExportExcel}
    >
      <Icon name="file excel outline" />
      Export to Excel
    </Button>
  );
};

export default ExportExcelButton;
