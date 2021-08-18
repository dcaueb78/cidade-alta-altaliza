import React, { useState, useEffect } from 'react';
import { Container, Button, ButtonPlaceholder } from './styled';

interface IPaginationProps {
  currentPage: number;
  totalResults: number;
  resultsPerPage?: number;
  onChange(page: number): void;
}

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  totalResults,
  resultsPerPage = 2,
  onChange,
}) => {
  const [pagesArray, setPagesArray] = useState<number[]>([]);
  const [pagesTotal, setPagesTotal] = useState<number>(1);

  useEffect(() => {
    const delimiterPages = 5;
    const newPagesTotal = Math.ceil(totalResults / resultsPerPage);
    let newPagesArray = Array.from(Array(newPagesTotal).keys());
    const start = currentPage - delimiterPages < 0 ? 0 : currentPage - delimiterPages;
    const end = currentPage + delimiterPages > newPagesTotal
      ? newPagesTotal
      : currentPage + delimiterPages;

    newPagesArray = newPagesArray.slice(
      start,
      end,
    );

    console.log(newPagesTotal, newPagesArray);

    setPagesTotal(newPagesTotal);
    setPagesArray(newPagesArray);
  }, [currentPage, totalResults, resultsPerPage, setPagesArray]);

  return pagesArray.length > 1 ? (
    <Container>
      <Button
        type="button"
        disabled={currentPage === 1}
        className="btn btn-altaliza btn-sm"
        onClick={() => onChange(currentPage - 1)}
      >
        &lt;
      </Button>
      {pagesArray[0] ? (
        <ButtonPlaceholder>
          ...
        </ButtonPlaceholder>
      ) : null}
      {pagesArray.map((page) => (
        <Button
          key={`pagination-${page + 1}`}
          type="button"
          className={
            currentPage === page + 1
              ? 'btn btn-altaliza btn-sm active'
              : 'btn btn-altaliza btn-sm'
          }
          onClick={() => onChange(page + 1)}
        >
          {page + 1}
        </Button>
      ))}
      {pagesArray[pagesArray.length - 1] + 1 !== pagesTotal && (
        <ButtonPlaceholder>
          ...
        </ButtonPlaceholder>
      )}
      <Button
        type="button"
        disabled={currentPage === pagesTotal}
        className="btn btn-altaliza btn-sm"
        onClick={() => onChange(currentPage + 1)}
      >
        &gt;
      </Button>
    </Container>
  ) : null;
};

export default Pagination;
