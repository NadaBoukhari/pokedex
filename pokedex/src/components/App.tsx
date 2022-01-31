import { FC, useState } from "react";
import { useEffect } from "react";
import PokemonCard from "./PokemonCard/PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getMorePokemons,
  getPokemons,
} from "../redux/store/slices/PokemonSlice";
import { RootState } from "../redux/store";
import { Layout, List, Skeleton, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import PokedexHeader from "./PokemonHeader/PokedexHeader";
import "../App.css";

const { Content } = Layout;

export interface Pokemons {
  name: string;
  url?: string;
}

const App: FC = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);
  const [loadAmount, setLoadAmount] = useState<number>(32);
  const isPokemonListLoading = useSelector(
    (state: RootState) => state.loading.isLoading
  );

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(getPokemons());
    }
  }, [dispatch, pokemons.length]);

  const loadMoreData = () => {
    if (isPokemonListLoading) {
      return;
    }
    var newLoad: number = loadAmount + 32;
    setLoadAmount(newLoad);
    dispatch(getMorePokemons(newLoad));
  };

  return (
    <>
      <Layout>
        <Content style={{ height: "100vh", background: "#031b42" }}>
          <div
            id="scrollableDiv"
            className="navigation"
            style={{
              height: "inherit",
              overflow: "auto",
              padding: "0 16px",
              border: "1px solid rgba(140, 140, 140, 0.35)",
            }}
          >
            <InfiniteScroll
              dataLength={pokemons.length}
              next={loadMoreData}
              hasMore={pokemons.length < 860}
              loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
              endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
              scrollableTarget="scrollableDiv"
            >
              <PokedexHeader />
              <List
                grid={{
                  gutter: 8,
                  xs: 2,
                  sm: 2,
                  md: 4,
                  lg: 8,
                  xl: 8,
                  xxl: 12,
                }}
                dataSource={pokemons}
                renderItem={(item) => <PokemonCard name={item.name} />}
              />
            </InfiniteScroll>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default App;
