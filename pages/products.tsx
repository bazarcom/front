const Products = () => {
  const handleSearch = (query: string) => {
    // Axtarış məntiqinizi buraya yazın
    console.log('Axtarılan mətn:', query);
  };

  return (
    <div>
      <SearchInput onSearch={handleSearch} />
      {/* Digər komponentlər */}
    </div>
  );
};
