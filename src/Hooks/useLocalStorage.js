import { use, useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
	const [item, setItem] = useState(initialValue);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
    setTimeout(()=>{
      try {
        const localItems = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!localItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localItems);
          setItem(parsedItem)
        }
  
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true)
      }
    }, 4000)
	}, []);

	const saveItem = (newItem) => {
		localStorage.setItem(itemName, JSON.stringify(newItem));
		setItem(newItem);
	};

	return {
		item,
		saveItem,
		loading,
		error,
	};
}

export default useLocalStorage;
