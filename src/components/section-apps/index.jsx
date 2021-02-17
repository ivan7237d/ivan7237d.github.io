import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionApps = ({ apps }) => {
  if (!apps.length) return null;

  return (
    <Section title="Web apps">
      {apps.map((app) => (
        <SummaryItem
          key={app.name}
          name={app.name}
          description={app.description}
          link={app.link}
        />
      ))}
    </Section>
  );
};

export default SectionApps;
