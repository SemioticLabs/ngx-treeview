# [20.1.1](https://www.npmjs.com/package/@samotics/ngx-treeview) (2026-03-26)

### Security:

- Upgraded Node.js requirement from v18 to v20 (required by Angular 20.3.18+)
- Fixed Angular XSS vulnerability in i18n attribute bindings (GHSA-g93w-mfhg-p222) by upgrading Angular packages from 20.3.16 to 20.3.18
- Upgraded `@angular-devkit/build-angular` and related tooling from 20.3.14 to 20.3.21
- Fixed `flatted` prototype pollution / DoS vulnerabilities (GHSA-25h7-pfq9-p65f, GHSA-rf6f-7fwh-wjgh)
- Fixed `socket.io-parser` unbounded binary attachments vulnerability (GHSA-677m-j7p3-52f9)
- Upgraded `rollup` from 4.52.3 to 4.59.0, `webpack` from 5.101.2 to 5.105.0, `serialize-javascript` from 6.0.2 to 7.0.5, `copy-webpack-plugin` from 13.0.1 to 14.0.0
- Reduced total npm audit vulnerabilities from 25 to 9 (remaining 9 are low/moderate `picomatch` issues in build tooling with no upstream fix yet available)
- All 138 tests passing

---

# [20.1.0](https://www.npmjs.com/package/@samotics/ngx-treeview) (2026-03-10)

### Security:

- Addressed dependency vulnerabilities via `npm audit fix`
- Updated dependencies to resolve reported security issues

---

# [20.0.0](https://www.npmjs.com/package/@samotics/ngx-treeview) (2026-01-21)

### Enhancement:

- Upgrade to Angular 20
- Updated Angular dependencies to ^20.3.14
- Updated Angular dev dependencies to ^20.3.14
- Updated ng-packagr to ^20.3.2
- Updated TypeScript to ~5.8.0
- Updated peer dependencies to require Angular ^20.0.0

### Breaking Changes:

- Requires Angular 20.x

---

# [19.1.0](https://www.npmjs.com/package/@samotics/ngx-treeview) (2026-01-23)

### Enhancement:

- Updated Angular dependencies from ^19.0.0 to ^19.2.18
- Updated Angular dev dependencies to ^19.2.18
- Updated ng-packagr to ^19.2.2
- Updated documentation to reflect Angular 19.2.18 dependency requirements

---

# [19.0.1](https://www.npmjs.com/package/@samotics/ngx-treeview) (2025-12-09)

### Enhancement:

- Updated documentation to reflect Angular 19 upgrade
- Added version compatibility matrix
- Updated installation instructions with correct package name

---

# [19.0.0](https://www.npmjs.com/package/@samotics/ngx-treeview) (2025-12-09)

### Enhancement:

- Upgrade to Angular 19
- Updated all dependencies to latest compatible versions
- Fixed test compatibility issues with Angular 19
- Updated TypeScript to 5.6.2
- Updated zone.js to 0.15.0

### Breaking Changes:

- Requires Angular 19.x
- Requires minimum TypeScript 5.6.2
- Package name: `@samotics/ngx-treeview`

---

<a name="0.0.3"></a>

# [0.0.3](https://www.npmjs.com/package/ngx-treeview) (2017-04-20)

### Upgrade project for Angular 4 from my old component: [ng2-dropdown-treeview](https://www.npmjs.com/package/ng2-dropdown-treeview)

# [0.0.5](https://www.npmjs.com/package/ngx-treeview) (2017-05-25)

### Enhancement:

- Item always expands when matching search filter.

# [1.0.6](https://www.npmjs.com/package/ngx-treeview) (2017-07-10)

### Enhancement:

- Build bundles.
- 100% code coverage.

# [1.0.7](https://www.npmjs.com/package/ngx-treeview) (2017-07-19)

### Enhancement:

- Template for header

```js
export interface TreeviewHeaderTemplateContext {
  config: TreeviewConfig;
  item: TreeviewItem;
  onCollapseExpand: () => void;
  onCheckedChange: (checked: boolean) => void;
  onFilterTextChange: (text: string) => void;
}
```

### Refactoring:

- Changes on interface of Treeview

```js
export interface TreeviewItemTemplateContext {
  item: TreeviewItem;
  onCollapseExpand: () => void;
  onCheckedChange: () => void;
}
```

- Changes on TreeviewConfig

```js
export class TreeviewConfig {
  hasAllCheckBox = true;
  hasFilter = false;
  hasCollapseExpand = false;
  maxHeight = 500;
}
```

### Demo:

- Example for ngx-dropdown-treeview-select component.

# [1.0.8](https://www.npmjs.com/package/ngx-treeview) (2017-07-20)

### Enhancement:

- Refactor CSS.

### Demo:

- Update examples.

# [1.0.9](https://www.npmjs.com/package/ngx-treeview) (2017-07-21)

### Enhancement:

- Expose DropdownDirective from DropdownTreeviewComponent.

# [1.1.0](https://www.npmjs.com/package/ngx-treeview) (2017-08-16)

### Enhancement:

- Support Bootstrap 4 beta.

# [1.2.0](https://www.npmjs.com/package/ngx-treeview) (2017-09-18)

### Enhancement:

- Support tri-state checkbox.

# [1.2.4](https://www.npmjs.com/package/ngx-treeview) (2017-10-19)

### Enhancement:

- Support configuration property to decouple parent and child.

# [1.2.5](https://www.npmjs.com/package/ngx-treeview) (2017-11-01)

### Enhancement:

- Rename ngOutletContext (deprecated) to ngTemplateOutletContext.

# [2.0.0](https://www.npmjs.com/package/ngx-treeview) (2017-12-21)

### Enhancement:

- Upgrade to Angular 5.

# [2.0.2](https://www.npmjs.com/package/ngx-treeview) (2018-01-30)

### Enhancement:

- Upgrade to Bootstrap 4 Final.

# [2.0.3](https://www.npmjs.com/package/ngx-treeview) (2018-02-02)

### Enhancement:

- Fix bugs.

# [2.0.4](https://www.npmjs.com/package/ngx-treeview) (2018-02-05)

### Enhancement:

- Allow to toggle on checkbox's label.

# [2.0.5](https://www.npmjs.com/package/ngx-treeview) (2018-03-19)

### Security:

- Update NPM packages to fix security problem from "zkat / ssri".

# [2.0.6](https://www.npmjs.com/package/ngx-treeview) (2018-04-09)

### Enhancement:

- Add event filterChange.

# [2.0.7](https://www.npmjs.com/package/ngx-treeview) (2018-06-07)

### Enhancement:

- Change lodash imports.

# [6.0.0](https://www.npmjs.com/package/ngx-treeview) (2018-06-08)

### Enhancement:

- Upgrade to Angular 6.

# [10.0.1](https://www.npmjs.com/package/ngx-treeview) (2020-07-06)

### Enhancement:

- Upgrade to Angular 10.
- Upgrade Bootstrap to 4.5.1
- Remove fontawesome

# [10.0.2](https://www.npmjs.com/package/ngx-treeview) (2020-07-07)

### Enhancement:

- Fix error ExpressionChangedAfterItHasBeenCheckedError
