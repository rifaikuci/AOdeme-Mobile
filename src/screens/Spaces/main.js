import { FlatList } from "react-native";
import { dummyData, SIZES } from "../../../constants";
import CategoryCard from "./categoryCard";
import React from "react";
import MainFooter from "./mainFooter";

const Main = () => {

  return (
    <FlatList data={dummyData.categories}
              ListFooterComponent={<MainFooter />}
              numColumns={2}
              scrollEnabled={true}
              listKey={"BrowseSpaces"}
              keyExtractor={item => `BrowseCategories-${item.id}`}
              contentContainerStyle={{ marginTop: 12 }}
              renderItem={({ item, index }) => (
                <CategoryCard
                  category={item}
                  containerStyle={{
                    height: 130,
                    width: (SIZES.width - SIZES.width / 7) / 2,
                    marginTop: 12,
                    marginLeft: (index + 1) % 2 == 0 ? 12 : 24,
                  }} />
              )} />

  );
};

export default Main;
