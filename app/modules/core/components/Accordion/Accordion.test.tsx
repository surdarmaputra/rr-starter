import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './Accordion';

describe('Accordion', () => {
  test('renders with data-testid', async () => {
    const dataTestId = 'sample-test-id';
    render(
      <Accordion dataTestId={dataTestId} type='single'>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>
            Content
          </AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    const accordion = await screen.findByTestId(dataTestId);
    const trigger = await within(accordion).findByText(/Trigger/);
    expect(screen.queryByText(/Content/)).toBeNull();
    fireEvent.click(trigger);
    await within(accordion).findByText(/Content/);
  });
});
