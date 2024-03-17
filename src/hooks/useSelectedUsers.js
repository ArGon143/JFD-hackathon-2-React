import { useLocalStorage } from "./useLocalStorage"
import { users } from "../db";
import { useEffect, useState } from "react";

/**
 * @typedef {Object} Options
 * @property {boolean} onlyUnique Если true, то хранит только уникальные значения
 * @property {boolean} favorites Если true, то возвращает список избранных пользователей
 * @property {string} filter Значение для фильтрации списка пользователей
 * Хук возвращает список пользователей и функцию для добавления пользователя в список выбранных
 * @param {string[] | number[] | ((...args: any) => string[] | number[])} initialValue Начальное значение
 * @param {boolean} onlyUnique Если true, то хранит только уникальные значения
 * @param {Options} options Опции
 * @returns {[string[] | number[], React.Dispatch<string[] | number[]>]} [value, setValue] 
 */
export function useSelectedUsers(initialValue = [], options) {
    const init = initialValue instanceof Function ? initialValue() : initialValue
    const { onlyUnique = false, favorites = false, filter = null } = options
    const filterFn = (a, b) => {
        if (!filter) return true
        if (filter && a === b) return true
        return false
    }
    const [selected, setSelected] = useLocalStorage('selected', init)
    const selectUser = (v) => {
        if (selected.includes(v) && onlyUnique) {
            setSelected(selected.filter((item) => item !== v))
        } else {
            setSelected(prev => [...prev, v])
        }
    }
    const [usersList, setUsersList] = useState(users);
    useEffect(() => {
        setUsersList(prev => {
            return prev.map((item) => {
                if (selected.includes(item.id)) {
                    return { ...item, selected: true }
                } else {
                    return { ...item, selected: false }
                }
            })
        })
    }, [selected])
    return [!favorites ? usersList.filter((user) => filterFn(user?.id, filter)) : usersList.filter((user) => selected.includes(user?.id)), selectUser]
}