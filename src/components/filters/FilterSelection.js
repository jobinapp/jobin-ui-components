import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";

import FilterCustom from "./FilterCustom";
import SearchBar from "../basics/input/SearchBar";
import CheckBox from "../basics/CheckBox";

const fuseOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ["name"]
};

const FilterMultipleSelection = props => {
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState(props.title);
    const [selectionArray, setSelectionArray] = useState(
        props.singleSelection
            ? null
            : props.prevSelection
            ? props.prevSelection
            : []
    );
    const [selection, setSelection] = useState(
        props.singleSelection ? props.prevSelection : null
    );
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(props.items && props.items.length > 0 ? props.items : []);

        if (props.prevSelection && props.prevSelection.length > 0) {
            for (let i = 0; i < props.prevSelection.length; i++) {
                optionSelected(props.prevSelection[i]);
            }
        }

        setLoading(false);
    }, [props.items]);

    const optionSelected = item => {
        if (item.id === "all") {
            setTitle(props.title + " - Todas");
            setFiltered(true);
            setItems(prevItems => {
                const tempArray = [];
                const all = prevItems.map((item, idx) => {
                    let allTemp = {
                        ...item,
                        selected: true
                    };
                    if (idx === 0) {
                        allTemp.id = "none";
                        allTemp.name = "Ninguna";
                    } else {
                        tempArray.push(allTemp);
                    }
                    return allTemp;
                });
                if (!loading) {
                    setSelectionArray(tempArray);
                    props.selectionChange(tempArray);
                }
                return all;
            });
        } else if (item.id === "none") {
            setTitle(props.title);
            setFiltered(false);
            setSelectionArray([]);
            props.selectionChange([]);
            setItems(prevItems => {
                return prevItems.map((item, idx) => {
                    let noneTemp = {
                        ...item,
                        selected: false
                    };
                    if (idx === 0) {
                        noneTemp.id = "all";
                        noneTemp.name = "Todas";
                    }
                    return noneTemp;
                });
            });
        } else {
            if (props.singleSelection) {
                if (loading || item !== selection) {
                    setItems(prevItems => {
                        return prevItems.map((prevItem, idx) => {
                            if (prevItem.id === item.id) {
                                const newItem = {
                                    ...prevItems[idx],
                                    selected: true
                                };
                                setSelection(newItem);
                                setFiltered(true);
                                props.selectionChange(newItem);
                                return newItem;
                            } else {
                                return {
                                    ...prevItems[idx],
                                    selected: false
                                };
                            }
                        });
                    });
                }
            } else {
                if (
                    loading &&
                    props.prevSelection &&
                    props.prevSelection.length > 0
                ) {
                    setTitle(props.title + " - " + props.prevSelection.length);
                    setFiltered(true);
                }
                setItems(prevItems => {
                    return prevItems.map((prevItem, idx) => {
                        if (prevItem.id === item.id) {
                            const newItem = {
                                ...prevItems[idx],
                                selected: !prevItems[idx].selected
                            };
                            if (!loading) {
                                changeItemSelection(newItem);
                            }
                            return newItem;
                        } else {
                            if (prevItem.id === "none") {
                                const newItem = {
                                    id: "all",
                                    name: "Todas",
                                    selected: false
                                };
                                return newItem;
                            } else {
                                return prevItem;
                            }
                        }
                    });
                });
            }
        }
    };

    const changeItemSelection = item => {
        //New element
        if (item.selected) {
            setFiltered(true);
            const tempArray = selectionArray;
            tempArray.push(item);
            setSelectionArray(tempArray);
            props.selectionChange(tempArray);
            if (tempArray.length === items.length - 1) {
                setTitle(props.title + " - Todas");
            } else {
                setTitle(props.title + " - " + tempArray.length);
            }
        }
        //Remove element
        else {
            if (selectionArray.length - 1 === 0) {
                setTitle(props.title);
                setFiltered(false);
                setSelectionArray([]);
                props.selectionChange([]);
            } else {
                setTitle(props.title + " - " + (selectionArray.length - 1));
                const tempArray = [...selectionArray];
                tempArray.map((prevItem, idx) => {
                    if (prevItem.id === item.id) {
                        tempArray.splice(idx, 1);
                        setSelectionArray(tempArray);
                        props.selectionChange(tempArray);
                    }
                });
            }
        }
    };

    const renderMenu = () => {
        const fuse = new Fuse(items, fuseOptions);
        const data = query ? fuse.search(query) : items;
        return (
            <div className="items-filter">
                <SearchBar
                    style={{ height: 36, width: 180, marginBottom: 16 }}
                    styleinput={{ height: 36 }}
                    placeholder={"Filtrar"}
                    onChange={e => setQuery(e.target.value)}
                />
                <div className="options">
                    {data.map(item => {
                        return (
                            <CheckBox
                                key={item.id}
                                style={{ marginTop: 8 }}
                                title={item.name}
                                onClick={() => optionSelected(item)}
                                selected={item.selected}
                            />
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <FilterCustom
            style={props.style}
            type={props.type}
            title={title}
            filtered={filtered}
        >
            {renderMenu()}
        </FilterCustom>
    );
};

export default FilterMultipleSelection;
