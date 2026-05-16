/**
 * @fileoverview メインサーバーの動作を確認するためのテスト
 * Hono の app.request メソッドを使用して、HTTP リクエストをモックし
 * レスポンスの検証を行います。
 */

import { assertEquals } from "@std/assert";
import { app } from "../src/main.ts";

/**
 * ルートパス（/）が "Hello World" を返すことを検証するテスト
 */
Deno.test("GET / should return Hello World", async () => {
  // GET リクエストをシミュレート
  const res = await app.request("/");

  // ステータスコードが 200 OK であることを確認
  assertEquals(res.status, 200);

  // レスポンスボディが "Hello World" であることを確認
  const text = await res.text();
  assertEquals(text, "Hello World");
});
