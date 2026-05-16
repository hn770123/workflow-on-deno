/**
 * @fileoverview Hello World Web サーバーのメインエントリーポイント
 * このモジュールは Hono フレームワークを使用して、基本的な Web サーバーを構築します。
 */

import { Hono } from "hono";

/**
 * Hono アプリケーションのインスタンス
 * ルーティングの定義やミドルウェアの設定に使用されます。
 */
export const app = new Hono();

/**
 * ルートパス（/）に対する GET リクエストのハンドラー
 * シンプルな "Hello World" 文字列をテキスト形式で返します。
 */
app.get("/", (c) => {
  return c.text("Hello World");
});

// Deno.serve を使用してサーバーを起動します。
// テスト時にはこのブロックは実行されません。
if (import.meta.main) {
  Deno.serve(app.fetch);
}
