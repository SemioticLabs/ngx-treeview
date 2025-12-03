import { Component, EventEmitter, Input, Output, viewChild, TemplateRef, signal, computed, AfterViewInit } from '@angular/core';
import { TreeviewI18n } from '../../models/treeview-i18n';
import { TreeviewItem } from '../../models/treeview-item';
import { TreeviewConfig } from '../../models/treeview-config';
import { TreeviewComponent } from '../treeview/treeview.component';
import { TreeviewHeaderTemplateContext } from '../../models/treeview-header-template-context';
import { TreeviewItemTemplateContext } from '../../models/treeview-item-template-context';

@Component({
  selector: 'ngx-dropdown-treeview',
  templateUrl: './dropdown-treeview.component.html',
  styleUrls: ['./dropdown-treeview.component.scss'],
  standalone: false
})
export class DropdownTreeviewComponent implements AfterViewInit {
  @Input() buttonClass = 'btn-outline-secondary';
  @Input() headerTemplate: TemplateRef<TreeviewHeaderTemplateContext>;
  @Input() itemTemplate: TemplateRef<TreeviewItemTemplateContext>;
  @Input() items: TreeviewItem[];
  @Input() config: TreeviewConfig;
  @Output() selectedChange = new EventEmitter<any[]>(true);
  @Output() filterChange = new EventEmitter<string>();
  
  // Modern Angular 19: Use viewChild signal instead of @ViewChild
  treeviewComponent = viewChild<TreeviewComponent>(TreeviewComponent);
  
  // Use a signal to track when selection changes (since TreeviewComponent.selection is not a signal)
  private selectionVersion = signal(0);
  
  // Computed signal that reacts to both treeviewComponent and selectionVersion changes
  buttonLabel = computed(() => {
    // Read selectionVersion to make this computed signal reactive to selection changes
    this.selectionVersion();
    const treeview = this.treeviewComponent();
    if (treeview?.selection) {
      return this.i18n.getText(treeview.selection);
    }
    return '';
  });

  constructor(
    public i18n: TreeviewI18n,
    private defaultConfig: TreeviewConfig
  ) {
    this.config = this.defaultConfig;
  }

  ngAfterViewInit(): void {
    // Initialize button label after view is ready
    // This triggers the computed signal to evaluate with the initialized treeview
    this.selectionVersion.update(v => v + 1);
  }

  onSelectedChange(values: any[]): void {
    // Update the version signal to trigger computed signal re-evaluation
    this.selectionVersion.update(v => v + 1);
    this.selectedChange.emit(values);
  }

  onFilterChange(text: string): void {
    this.filterChange.emit(text);
  }
}
