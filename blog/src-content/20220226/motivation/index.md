---
title: "アニメと新規リポジトリと活性化エネルギー"
description: ""
date: 2022-02-26T12:52:18+09:00
categories:
  - "ブログ"
  - "プライベート"
  - "技術系"
tags:
  - "学校"
  - "Linux"
draft: false
pager: true
share: true
---

久しぶりにこのブログを更新してみる。更新できないのは学校のせい。時間をどんどん奪っていく。

まぁ学校の課題じゃないのでどっちかっていうと無駄に計算の多い問題ばかり載せてくる数研出版が悪い。

定積分とかリードアルファで無駄に小学生並みの計算を大量に要求してくるの何なんだ。お陰で立式できても計算ミスることが多すぎて死ぬ。

しかも最近は化学で概念底に微分なことをし始めたし、いよいよふざけてる。と思ったけど物理よりマシか。あれは数Dとでもしたほうがいい。

## 何がやばいか

何がやばいのかって、このブログを読んでる人がいるらしい。

いや誰かに発信するためにネットに掲載してるから間違いじゃないんだけどさ。

何でこんな高校生の拙い文がたらたら流れてくるだけで画像もろくにない、クソつまらん文章を読む人がいるのか。

Hugoで適当に構築してるからアクセス解析とか何もしてないんだけどしたほうがいいのかしら。

こんなブログ読むのならTwitterのTLとかアニメ見てたほうがまだ有意義だと思いますよ？

個人的にはこのブログはタイピングの練習と高校生の自分の思考とか日常を記録しておこうと思って書いてるだけなので、他人に読ませるものとか読んでて徳するとか楽しいとかそういうものは一切ないと思ってるんですがね。

まずSEO対策とか何もしてないし検索でこのサイトに辿り着く人がいるのかどうか。まぁかなり疑問なところ。

## 活性化エネルギー

多分だけど、単体が化学反応を起こして化合物になるために必要な起源力みたいなものだと思う。今回のテスト範囲。くそ。

熱化学方程式とか意味わからんからな。物理と数学入ってくんなや。

まぁこの中で言ってるのは拡大解釈して「何かをし始める時に必要なエネルギー」って意味なんだけどね。

### 新しいアニメを見る

小学校とか中学の頃は新しいアニメとか漫画に手を出すことに何の抵抗もなかった、だけど高校に入って忙しくなってから新しいコンテンツに手を出すことにすごい抵抗を覚えるようになってしまった、

高校に入ってから触れたコンテンツといえば、全く別系統でいえばまどマギとエヴァとハピシュガだろうか。

エヴァも、周囲の人間（語弊あり）がみんな履修してたので見たのだがそこからハマってしまった。

ただ見始めるまではすごい長かったけど。んで1度手を出してしまえば勝利（敗北ともいう？）で、関連コンテンツに手を出すのには何の抵抗もない。

多分一度触れることでそのコンテンツの概要というか軸みたいなものが見えてくるから抵抗がなくなるんだろうか。

だからオタクとしては失格かもしれないが、実はネタバレされてある程度内容を知ってたほうが気楽に楽しめたりする。

でも全容を知ったら知ったで「記憶を消して見直したい」とか抜かすので本当にどうしようもない。人間は矛盾した生き物。

まどマギも一緒で、「なんとなくやばい」ってのは知ってたから手を出してなかったけど、一度見始めてマミさんとさやかでショックを受けてからはかなり耐性がついて、叛逆の物語のほむらではそこまで衝撃を受けなかった。

んでまどマギも一緒で、一度コンテンツを知ってしまえばあとはずるずると沼に堕ちるだけ。

ソシャゲ版マギレコやらオリコマギカやらタルトマギカやらかずみマギカには何の抵抗もなく読めた。

そう考えるとやっぱり「新しいものに手を出すための一種のE」が存在するのではないかと思ってしまう。心理的な現象なんだろうけど。

## 新規リポジトリ

んでこれが新規リポにも同じことが言える。割と昔は無差別にリポジトリを乱立して、いらなくなったら消すということをしてた。

けど最近は作るのに抵抗があるというか、中程度だったらもうそれはGistでいいのではとなってしまう。

GitHub Gistsは単体では微妙だけど、VSCodeの拡張機能と組み合わせると組み合わせると真価を発揮する。

VSCodeでGist一覧から編集したいものを選んで、あとはファイルと同じようにいじれば終わり。

かってにエディタの拡張機能がアップロードをやってくれる。限定公開もできるから、簡易クラウドストレージとして使えるのではないだろうか。

というか、バイナリファイルを`base64`してそれをGistに投稿すれば、ストレージとして使えるのではないだろうか。

いやそれをやってしまってはダメとわかってはいるが、なんかやってみたくなってしまう。今度やってみるか。

大容量のファイルではないならばMicrosoftも文句は言うまい。と言うか大企業がそこまでケチではないことを願う。

実装は面倒だから汎用ライブラリと組み合わせたBashでいいや。なれてる言語が一番描きやすい。

APIはどうせcurlで叩いてjqで解析できる。問題はディレクトリ構造だな。ディレクトリ構造をテキストファイルで定義するにもしてもどうしたらいいんだろう。

まぁディレクトリ構造なして単純にアップロードとかするスクリプトだけでいいや。それなら簡単だろ。

さて、話が逸れまくってしまった。話を戻すと新規リポジトリの話だ。

最近よく思うけどこう言うふうに自分の思考をそのまま文章にしたときに無限に逸れてしまうのは何かの発達障害なんだろうか。みんなそうなのかな？

新規リポジトリを作るとき、昔はなんも考えなかったのに今はインテグなんとかとかディレクトリ構造がうんたらとかリリースがどうとか、面倒なことを考えるようになってしまった。

どうせGitHub Studentで学生の身分をフル活用して0円でMSの脛をかじってGitHub Proが使えているので、何も考えずにプライベートリポジトリにしてしまっているものがたくさんある。どうしよう、学生の身分じゃなくなった時が非常にめんどうそうだ。

まぁそんなことになったらそれは将来の自分に任せるとしよう。今は今。その時はその時。ピアノの先生の息子も言ってた。

## 多分何にでも言える

多分この「活性化E」の話はプログラムとか二次元に限定しなくても何でも言えることなのかなと思う。

多分若いうちに色々やっとけと言うのは、ある程度年齢が上がった時にこの「活性化Eを使わないといけない場面」を減らすためなのかもしれない。

待って、バスが駅に着いたので書くのを一旦やめる。

帰ってきて昼飯を食った。メニューでも書いとくか。

- 醤油味スーパーカップ
- アップルティー
- りんごのパンケーキ
- いかの唐揚げ
- シュガーロール
- きなこもち

なんだこの季節感もバランスもないメニューは。

なんだっけ？話を忘れてしまった。あ、多分新しいことをする気力がないって話だ。

でも今さっき上で思いついたGitHub Gistをファイルストレージとして使うツールを作りたい欲がすごい。

多分JSONですぐできると思うので書いてくるか。

それじゃ、また今度。