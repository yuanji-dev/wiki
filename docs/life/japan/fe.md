# 基本情報技術者試験

As known as **Fundamental Information Technology Engineer Examination** or FE.

!!! warning "Changes since 2020"

    - [基本情報技術者試験における出題を見直し](https://www.ipa.go.jp/about/press/20190124.html)
    - [令和4年度上期試験より受験手数料は ==7,500円== となります。](https://www.jitec.ipa.go.jp/1_00topic/topic_20210716.html)

## Application

- [令和 4 年度上期基本情報技術者試験について](https://www.jitec.ipa.go.jp/1_02annai/r04-1fe_exam.html)
- [基本情報技術者試験情報 | プロメトリック](http://pf.prometric-jp.com/testlist/fe/index.html)

## Schedule

| Name                           | Time                      | Location       |
| ------------------------------ | ------------------------- | -------------- |
| 基本情報技術者試験（午前試験） | 2022-04-04T10:00:00+09:00 | 三軒茶屋駅南口 |
| 基本情報技術者試験（午後試験） | 2022-04-11T13:00:00+09:00 | 三軒茶屋駅南口 |

## Memo

### 情報セキュリティ

- [平成 21 年春期 午後問 4(情報セキュリティ)｜基本情報技術者試験.com](https://www.fe-siken.com/kakomon/21_haru/pm04.html)
- [平成 21 年秋期 午後問 4(情報セキュリティ)｜基本情報技術者試験.com](https://www.fe-siken.com/kakomon/21_aki/pm04.html)
- [平成 22 年秋期 午後問 4(情報セキュリティ)｜基本情報技術者試験.com](https://www.fe-siken.com/kakomon/22_aki/pm04.html)
- [平成 24 年秋期 午後問 4(情報セキュリティ)｜基本情報技術者試験.com](https://www.fe-siken.com/kakomon/24_aki/pm04.html)
- [平成 27 年秋期 午後問 1(情報セキュリティ)｜基本情報技術者試験.com](https://www.fe-siken.com/kakomon/27_aki/pm01.html)

### データベース

#### LIKE

> LIKE 句は、指定したパターンと文字列比較を行うための演算子で、次の特殊記号を用いて文字列のパターンを指定します。
>
> \_ … 任意の 1 文字
>
> % … 0 文字以上の任意の文字列

#### JOIN

Ref:

- [平成 30 年秋期 午後問 3(データベース)｜基本情報技術者試験.com](https://www.fe-siken.com/kakomon/30_aki/pm03.html)
- [これでわかった!? LEFT / RIGHT JOIN. - Qiita](https://qiita.com/zaburo/items/548b3c40fee68cd1e3b7)

#### COUNT

> COUNT(\*)を指定すると単純に全行を数えるため NULL を含む行もカウントされますが、COUNT(列名)とすると、その列の値が NULL 以外である行数をカウントします。

Ref: [平成 31 年春期 午後問 3(データベース)｜基本情報技術者試験.com](https://www.fe-siken.com/kakomon/31_haru/pm03.html)

#### CASE

> 一般的なプログラム言語で使われる IF-ELSE 構造を SQL で記述するためには CASE 式を使用します。

```sql
//単純CASE式
CASE [制御式]
　WHEN [値1] THEN [返り値1]
　WHEN [値2] THEN [返り値2]
　ELSE [どの条件にも一致しない場合に返す値]
END

//検索CASE式
CASE
　WHEN [条件式1] THEN [返り値1]
　WHEN [条件式2] THEN [返り値2]
　ELSE [どの条件にも一致しない場合に返す値]
END
```

Ref: [平成 30 年秋期 午後問 3(データベース)｜基本情報技術者試験.com](https://www.fe-siken.com/kakomon/30_aki/pm03.html)

#### 正規化

- 第１正規化
  繰り返し項目をなくし、主キーを設定する
- 第２正規化
  主キーの一部によって一意に決まる項目を別表に移す
- 第３正規化
  主キー以外の項目によって一意に決まる項目を別表に移す。

Ref: [平成 27 年春期 午後問 3(データベース)｜基本情報技術者試験.com](https://www.fe-siken.com/kakomon/27_haru/pm03.html)

### ソフトウェア

#### 構文木

- 逆ポーランド表記法

Ref: [平成 22 年春期 午後問 2(ソフトウェア)｜基本情報技術者試験.com](https://www.fe-siken.com/kakomon/22_haru/pm02.html)

#### デッドロック

> デッドロックの発生する可能性があるのは、2 つのプロセスで互いに使用する資源の占有順序が「逆順」のときです。

Ref: [平成 29 年秋期 午後問 2(ソフトウェア)｜基本情報技術者試験.com](https://www.fe-siken.com/kakomon/29_aki/pm02.html)

#### ページング

- ページフォールト

> プログラムの実行に必要なページが物理アドレス空間上に存在しないときにはページフォールトという割込みが発生します。ページフォールトの発生時、物理アドレス空間にページの空きがなかった場合には、物理アドレス空間(主記憶)の物理ページを補助記憶装置に退避させ、その空いた部分に仮想アドレス空間(補助記憶装置)の仮想ページを読み込むことで、ページを入れ替える処理が行われます。

- FIFO, LRU & LFU

> FIFO(First In First Out)は、ページインしてから最も時間が経過しているページを置換え対象とする先入れ先出しのアルゴリズムです。
>
> LRU(Least Recently Used)方式は、対象ページの中で最も長い時間参照されていないものを置換え対象とするアルゴリズムです。
>
> LFU(Least Frequently Used)は、置換対象の中で最も参照回数の少ないページを置換対象とする。

Ref:

- [平成 31 年春期 午後問 2(ソフトウェア)｜基本情報技術者試験.com](https://www.fe-siken.com/kakomon/31_haru/pm02.html)
- [平成 25 年春期 午後問 2(ソフトウェア)｜基本情報技術者試験.com](https://www.fe-siken.com/kakomon/25_haru/pm02.html)

#### 並列実行

> プログラムの中から並列実行が可能な部分を抽出する場合，並列に実行してもデータの更新と参照の順序が変化しないことを保証する必要がある。

Ref: [平成 26 年春期 午後問 3(ソフトウェア)｜基本情報技術者試験.com](https://www.fe-siken.com/kakomon/26_haru/pm03.html)

#### 実行順序

- ラウンドロビン方式
- 優先度順方式

Ref: [平成 30 年秋期 午後問 2(ソフトウェア)｜基本情報技術者試験.com](https://www.fe-siken.com/kakomon/30_aki/pm02.html)

## Links

- [IT 知識 0 から 1 ヶ月で基本情報技術者試験に合格した話 - Qiita](https://qiita.com/yusuke_blog1026/items/d6b079fa026ce6776773)
- [基本情報技術者過去問道場｜基本情報技術者試験.com](https://www.fe-siken.com/fekakomon.php)
