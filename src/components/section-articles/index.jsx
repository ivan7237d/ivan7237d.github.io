import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionArticles = ({ articles }) => {
  if (!articles.length) return null;

  return (
    <Section title="Posts">
      {articles.map((article) => (
        <SummaryItem
          key={article.name}
          name={article.name}
          description={article.description}
          link={article.link}
        />
      ))}
    </Section>
  );
};

export default SectionArticles;
