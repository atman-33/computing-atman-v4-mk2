## 用語一覧

### React

- useState          : 関数コンポーネントでstateを管理（ state の保持と更新）するためのReactフック
- useReducer        : useStateと同じくstateを管理するReactフック。ただし、useReducerは、定義の時点で関数を決定する。
- useContext        : useContextとは、Context機能をよりシンプルに使える機能。親からPropsで渡されていないのに、Contextに収容されているデータアクセスできる。
- createContext     : useContextを扱うコンテキストオブジェクトを作成する。

    > useContext, createContext は利用せずに、Redux を利用することを推奨

- useEffect         : 関数コンポーネントで副作用を制御できるReactフック

    > 副作用: DOMの変更やファイルへの書き込みなど、関数の外に影響を与える処理。 useEffectを使用すると、関数を実行するタイミングをReactのレンダリング後まで遅らせることが可能

- useLayoutEffect   : 描画が画面に反映される手前で何か処理を実行したい場合に利用

### Redux

- createSlice       : reducerを作成するだけで自動的にaction typeや、action creatorを生成する。
- createAsyncThunk  : 非同期処理の実行状況に応じたActionCreatorを生成する関数
- combineReducers   : 複数のreducerを、createStoreに渡せる一つの関数にまとめる。

    > configureStore では、combineReducers でまとめた関数を利用できないため注意

- configureStore    : 作成したsliceを、一つのストアにまとめる関数
- useSelector       : store に保存されている state データの中から必要なデータを取得する。
- useDispatch       : store のデータを変更する関数を取得する。