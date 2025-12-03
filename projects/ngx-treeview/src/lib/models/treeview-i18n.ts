import { Injectable } from '@angular/core';
import { TreeviewSelection } from './treeview-item';

@Injectable()
export abstract class TreeviewI18n {
  abstract getText(selection: TreeviewSelection): string;
  abstract getAllCheckboxText(): string;
  abstract getFilterPlaceholder(): string;
  abstract getFilterNoItemsFoundText(): string;
  abstract getTooltipCollapseExpandText(isCollapse: boolean): string;
}

@Injectable()
export class DefaultTreeviewI18n extends TreeviewI18n {
  getText(selection: TreeviewSelection): string {
    const uncheckedItems = selection.uncheckedItems;
    const checkedItems = selection.checkedItems;
    
    // If uncheckedItems exists and is empty, everything is checked
    if (uncheckedItems && uncheckedItems.length === 0) {
      return this.getAllCheckboxText();
    }

    // If no checkedItems or empty, show appropriate message
    if (!checkedItems || checkedItems.length === 0) {
      return 'Select options';
    }

    // Show single item text or count
    if (checkedItems.length === 1) {
      return checkedItems[0].text;
    }
    
    return `${checkedItems.length} options selected`;
  }

  getAllCheckboxText(): string {
    return 'All';
  }

  getFilterPlaceholder(): string {
    return 'Filter';
  }

  getFilterNoItemsFoundText(): string {
    return 'No items found';
  }

  getTooltipCollapseExpandText(isCollapse: boolean): string {
    return isCollapse ? 'Expand' : 'Collapse';
  }
}
