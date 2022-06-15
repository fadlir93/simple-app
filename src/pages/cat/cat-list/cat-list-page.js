/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Card, Collapse, Container, Stack, Typography } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { isEmpty } from 'lodash';
import { SearchComponent } from '../../../components/SearchComponent';
import Label from '../../../components/Label';
import Page from '../../../components/Page';
import { handleListCart } from './cat-list-fetch';
import { style } from './cat-list-style';
import { CatData } from './cat-list-data';

export const CatList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isCollapse, setIsCollapse] = useState({});
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    if (!isEmpty(filterName)) {
      handleListCart({
        page: 0,
        setItems,
        filterName,
        isSearch: true
      });
      return;
    }
    handleListCart({
      page,
      setItems,
      filterName
    });
  }, [page, filterName]);

  const handleFilterByName = (name) => {
    const { value } = name.target;
    setFilterName(value);
  };

  return (
    <Page title="Cat List">
      <Container>
        <Stack mb={5}>
          <Typography variant="h4" gutterBottom>
            Cat List
          </Typography>
        </Stack>
        <SearchComponent filterName={filterName} onFilterName={handleFilterByName} />
        <Card sx={{ marginTop: 2 }}>
          <InfiniteScroll
            dataLength={items.length}
            next={() => setPage((d) => d + 1)}
            hasMore
            loader={<h4>Loading...</h4>}
          >
            {items.map((i, index) => (
              <Stack direction="row" style={style.dataTable} key={index}>
                <Stack mr={3} alignSelf="center">
                  <img width={60} src={i?.image?.url} alt={i.id} />
                </Stack>
                <Stack width="85%">
                  <Stack mb={1}>
                    <Label fontSize={16} variant="ghost" color="primary">
                      Cat {i.name} - {i.origin}
                    </Label>
                  </Stack>
                  <CatData />
                  <Collapse in={isCollapse[index]}>
                    <Stack direction="row">
                      <Stack>{i.description}</Stack>
                    </Stack>
                  </Collapse>
                  <Stack alignItems="flex-end" mt={1}>
                    <Button
                      onClick={() =>
                        setIsCollapse(
                          isCollapse[index] === undefined
                            ? { ...isCollapse, [index]: true }
                            : { ...isCollapse, [index]: !isCollapse[index] }
                        )
                      }
                      sx={{ width: 120 }}
                      variant="contained"
                      component="span"
                    >
                      View Detail
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </InfiniteScroll>
        </Card>
      </Container>
    </Page>
  );
};
