import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from './SuggestAddr.module.scss';

export default function SuggestAddr(): React.ReactNode {
  const [address, setAddress] = useState('');
  const [suggest, setSuggest] = useState<any[]>([]);
  const [suggestIsVisible, setSuggestIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isSelecting, setIsSelecting] = useState(false);

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isSelecting) {
      setIsSelecting(false);
      return;
    }

    if (address.length < 3) {
      setSuggest([]);
      setSuggestIsVisible(false);
      return;
    }

    getAddressData();
  }, [address]);

  const getAddressData = async () => {
    try {
      const response = await axios.get(`https://suggest-maps.yandex.ru/v1/suggest`, {
        params: {
          apikey: 'e0138f23-d41a-450e-8004-203dc2962ef7',
          text: address,
        },
      });
      setSuggest(response.data.results || []);
      if (response.data.results.length > 0) {
        setSuggestIsVisible(true);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggest([]);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
    setActiveIndex(-1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % suggest.length;
        scrollToActiveItem(newIndex);
        return newIndex;
      });
    } else if (event.key === 'ArrowUp') {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex - 1 + suggest.length) % suggest.length;
        scrollToActiveItem(newIndex);
        return newIndex;
      });
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (activeIndex >= 0 && suggest[activeIndex]) {
        handleSuggestionSelect(suggest[activeIndex].title.text);
      }
    } else if (event.key === 'Escape') {
      setSuggestIsVisible(false);
    }
  };

  const handleSuggestionSelect = (text: string) => {
    setIsSelecting(true);
    setAddress((prevAddress) => {
      const lastCommaIndex = prevAddress.lastIndexOf(',');
      if (lastCommaIndex === -1) {
        return text;
      }
      return `${prevAddress.slice(0, lastCommaIndex + 1)} ${text}`.trim();
    });

    setSuggestIsVisible(false);
    setSuggest([]);
  };

  const handleSuggestionClick = (text: string) => {
    handleSuggestionSelect(text);
  };

  const handleBlur = () => {
    setTimeout(() => setSuggestIsVisible(false), 200);
  };

  const scrollToActiveItem = (index: number) => {
    const list = listRef.current;
    if (list && list.children[index]) {
      (list.children[index] as HTMLElement).scrollIntoView({
        block: 'nearest',
        inline: 'nearest',
      });
    }
  };

  return (
    <div className={styles.root}>
      <input
        type="text"
        name="address"
        onChange={handleChange}
        value={address}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onFocus={() => address.length >= 3 && setSuggestIsVisible(true)}
        placeholder="Введите адрес"
        autoComplete="off"
        required
      />
      {suggestIsVisible && suggest.length > 0 && (
        <ul className={styles.dropdown} ref={listRef}>
          {suggest.map((hint, index) => (
            <li
              key={index}
              className={styles.suggestion}
              style={{
                backgroundColor: index === activeIndex ? '#f0f0f0' : '#fff',
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => handleSuggestionClick(hint.title.text)}>
              {hint.title.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
