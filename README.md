# mg-vscode-theme

mg vscode theme

从设计到编译出 json 文件

## 设计颜色

设计颜色需要对 vscode 布局以及主题有必要的了解

## 使用 JS 或者 TS 编译出一套 vscode 主题

为了避免直接书写 json 文件，我们需要做的就是充当设计与程序之间工作。

## scope

- `string`
- `string[]`

### 举个例子

```json
{
  "name": "Escape Characters",
  "scope": ["constant.character.escape"],
  "settings": {
    "foreground": "#89DDFF"
  }
}
```

### 举个例子

```json
{
  "scope": ["constant.character.escape"]
}
```

其实就是自定作用域的属性

## settings

- foreground 前景色
- fontStyle 字体样式

### 举个例子

```json
{
  "settings": {
    "fontStyle": "italic",
    "foreground": "#82AAFF"
  }
}
```
