siesta-example
==============

川野さんのメモアプリチュートリアルにSiestaテストを組んだサンプルです。  
<http://kawanoshinobu.com/2012/12/tutorial-1/>

構成
---------
- app  
  メモアプリディレクトリ
- siesta/example-touch/memo-test  
  テストディレクトリ(SiestaのExample上で組んだのでここがベース)

利用方法
---------
Webサーバ上に配置後、以下にアクセス。  
siesta/example-touch/memo-test/browse-desktop.html  
- テストケースjsをダブルクリックでテストスタート。
- Toggle DOM visibleボタンをONにすれば、テストの動きが見えます。  
画面上部のギアボタンでもDOM表示制御は可能です。  
ギアボタンでのSpeed runチェックを外しておくと動作が確認しやすいと思います。  

必要なもの
---------
- siesta内でExt JSのCDNを利用しているためインターネット接続が必要です。


※ navigation移動を利用した場合のテストでは、青背景状態になってしまうのがよく分かりませんでした orz  
sencha-touch をChromeで動作させてるからとの噂も・・・
