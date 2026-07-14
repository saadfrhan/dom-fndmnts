export function saveToStorage(key: string, data: unknown): void {
    const stringified = JSON.stringify(
        data
    )
    localStorage.setItem(key, stringified)
}

export function loadFromStorage<T>(key: string, fallback: T): T {
    const readItem = localStorage.getItem(key)
    if (!readItem) return fallback;
    try {
        return JSON.parse(readItem) as T
    } catch (error) {
        return fallback
    }
}
