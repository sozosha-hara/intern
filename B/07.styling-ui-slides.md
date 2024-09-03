# スタイリングとUIの改善

---

## 学習目標
- ReactでのCSSの適用方法を理解する
- インラインスタイルとCSS-in-JSの概念を学ぶ
- レスポンシブデザインの基本を理解する
- アクセシビリティの重要性を認識する

---

## ReactでのCSS適用方法
1. 外部CSSファイル
   ```jsx
   import './styles.css';
   ```
2. インラインスタイル
   ```jsx
   <div style={{ color: 'blue', fontSize: '14px' }}>
     Hello, World!
   </div>
   ```
3. CSS-in-JS（styled-components等）

---

## レスポンシブデザインの基本
- メディアクエリの使用
  ```css
  @media (max-width: 600px) {
    .container {
      flex-direction: column;
    }
  }
  ```
- フレックスボックスやグリッドレイアウトの活用
- ビューポートユニット（vh, vw）の使用

---

## アクセシビリティの考慮
- 適切なHTML要素の使用（セマンティックHTML）
- ARIA属性の追加
  ```jsx
  <button aria-label="タスクを削除">削除</button>
  ```
- キーボードナビゲーションのサポート
- 十分なコントラスト比の確保

---

## 実践演習
1. タスク管理アプリにスタイルを適用（CSS or インラインスタイル）
2. レスポンシブデザインを実装（モバイルファースト）
3. アクセシビリティを考慮したHTML構造とARIA属性の追加
4. 様々なデバイスとブラウザでUIをテスト
