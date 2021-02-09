const filterNames = ['all', 'overdue', 'today', 'favorites', 'repeating', 'archive'];

export const generateFilters = () => {
    return filterNames.map(name => ({
        name,
        count: Math.floor(Math.random() * 10)
    }));
}
