## 用語一覧

### React

- useState          : 関数コンポーネントでstateを管理（ state の保持と更新）するためのReactフック
- useRef            : コンポーネント内での参照を管理するために使用。コンポーネントの中身が変更されても再レンダリングすることなく値を保持する。
- useReducer        : useStateと同じくstateを管理するReactフック。ただし、useReducerは、定義の時点で関数を決定する。
- useContext        : useContextとは、Context機能をよりシンプルに使える機能。親からPropsで渡されていないのに、Contextに収容されているデータアクセスできる。
- createContext     : useContextを扱うコンテキストオブジェクトを作成する。

    > useContext, createContext は利用せずに、Redux を利用することを推奨

- useEffect         : 関数コンポーネントで副作用を制御できるReactフック

    > 副作用: DOMの変更やファイルへの書き込みなど、関数の外に影響を与える処理。 useEffectを使用すると、関数を実行するタイミングをReactのレンダリング後まで遅らせることが可能

- useLayoutEffect   : 描画が画面に反映される手前で何か処理を実行したい場合に利用

- memo              : props に変更が無い場合に、コンポーネントのレンダリングを発生させない（コンポーネントのメモ化）
- useMemo           : 値のメモ化
- useCallback       : 再レンダリングさせたくないコンポーネントに関数を渡す際に利用。関数のメモ化

- useTransition     : 特定の処理を遅延させる事が可能。
- useDeferredValue  : 遅延させたい処理（更新関数）をuseTransitionで囲めない時に利用（ライブラリなど）

    > useTransition, useDeferredValue は極力利用せずに、useMemoやuseCallbackでパフォーマンス改善できない時に利用する。

### Recoil

### Redux

Redux は、Global state 管理となり state が増えるとメンテが難しくなるため、Recoil を利用する事とする。

- createSlice       : reducerを作成するだけで自動的にaction typeや、action creatorを生成する。
- createAsyncThunk  : 非同期処理の実行状況に応じたActionCreatorを生成する関数
- combineReducers   : 複数のreducerを、createStoreに渡せる一つの関数にまとめる。

    > configureStore では、combineReducers でまとめた関数を利用できないため注意

- configureStore    : 作成したsliceを、一つのストアにまとめる関数
- useSelector       : store に保存されている state データの中から必要なデータを取得する。
- useDispatch       : store のデータを変更する関数を取得する。