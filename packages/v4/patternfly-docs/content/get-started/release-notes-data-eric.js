import React from "react";
import { CodeBlock, CodeBlockCode, TextContent, Text, TextList, TextListItem, TextVariants } from '@patternfly/react-core';

export const releaseNotes = [
  {
    component: "About modal",
    description: (<>Removed the <code className='ws-code'>AboutModalBoxHero</code> sub-component.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8931",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Accordion",
    description: (<>Renamed the <code className='ws-code'>AccordionExpandedContentBody</code> component to <code className='ws-code'>AccordionExpandableContentBody</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8525",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<AccordionExpandedContentBody>Body</AccordionExpandedContentBody>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<AccordionExpandableContentBody>Body</AccordionExpandableContentBody>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Accordion",
    description: (<>Renamed the <code className='ws-code'>large</code> prop value of the <code className='ws-code'>displaySize</code> prop to <code className='ws-code'>lg</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8206",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Accordion displaySize="large" />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Accordion displaySize="lg" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Alert",
    description: (<>Removed the <code className='ws-code'>aria-label</code> prop.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8649",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code className='ws-code'>aria-label</code> prop should not be used on an <code className='ws-code'>Alert</code> as it is not well supported by assistive technologies.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Alert aria-label="Error alert" />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Alert  />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Alert",
    description: (<>Replaced the <code className='ws-code'>titleHeadingLevel</code> prop with <code className='ws-code'>component</code>.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8518",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Alert titleHeadingLevel="h4" />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Alert component="h4" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Application launcher",
    description: (<>Deprecated the <code class='ws-code'>ApplicationLauncher</code> component.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8836",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>Codemods will update import and export paths to our deprecated directory, but we recommend replacing it with our new <code className='ws-code'>Dropdown</code> or <code className='ws-code'>Select</code> implementation.:</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { ApplicationLauncher } from '@patternfly/react-core';`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`import { ApplicationLauncher } from '@patternfly/react-core/deprecated';`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Application launcher",
    description: (<>Updated callback props to include the <code class='ws-code'>event</code> parameter.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8756",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code class='ws-code'>onFavorite</code> and <code class='ws-code'>onSearch</code> props now take <code class='ws-code'>event</code> as the first parameter. Selectors may need to be updated.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ApplicationLauncher onFavorite={(id) => handler(id)} onSearch={(text) => searchHandler(text)}/>
const handler1 = (id) => {};
const searchHandler1 = (text) => {};
<ApplicationLauncher onFavorite={handler1} onSearch={searchHandler1}>
function handler2(id) {};
function searchHandler2(text) {};
<ApplicationLauncher onFavorite={handler2} onSearch={searchHandler2}>`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<ApplicationLauncher onFavorite={(_event, id) => handler(id)} onSearch={(_event, text) => searchHandler(text)}/>
const handler1 = (_event, id) => {};
const searchHandler1 = (_event, text) => {};
<ApplicationLauncher onFavorite={handler1} onSearch={searchHandler1}>
function handler2(_event, id) {};
function searchHandler2(_event, text) {};
<ApplicationLauncher onFavorite={handler2} onSearch={searchHandler2}>`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Application launcher",
    description: (<>Replaced the internal input element with the <code class='ws-code'>SearchInput</code> component.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8293",
    repo: "react",
    fixedWithCodeMod: false
  }, {
    component: "Background image",
    description: (<>Removed the <code class='ws-code'>filter</code> prop and updated the <code class='ws-code'>src</code> prop.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8931",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code class='ws-code'>filter</code> was removed. The <code class='ws-code'>src</code> prop's type was updated to just a string and will no longer accept a <code class='ws-code'>BackgroundImageSrcMap</code> object. Codemods will not update the <code class='ws-code'>src</code> prop, but will raise an error if its value is not a string.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<BackgroundImage filter={<SomeFilter />} src={{xs: 'file/path'}} />

const srcPath = {xs: 'file/path'};
<BackgroundImage src={srcPath} />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`// An error is raised for the src prop
<BackgroundImage  src={{xs: 'file/path'}} />

const srcPath = {xs: 'file/path'};
// An error is raised for the src prop
<BackgroundImage src={srcPath} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Background image",
    description: (<>Removed the <code class='ws-code'>BackgroundImageSrcMap</code> interface.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8931",
    details: (
      <TextContent>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`const backgroundImgSrcObj: BackgroundImageSrcMap = {};`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`const backgroundImgSrcObj = {};`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Banner",
    description: (<>Updated the <code class='ws-code'>variant</code> prop's type.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8808",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code className='ws-code'>default</code> value is still valid, but the following values have been replaced with color values:</Text>
        <TextList>
          <TextListItem><code className='ws-code'>info</code> to <code className='ws-code'>blue</code> </TextListItem>
          <TextListItem><code className='ws-code'>danger</code> to <code className='ws-code'>red</code></TextListItem>
          <TextListItem><code className='ws-code'>success</code> to <code className='ws-code'>green</code></TextListItem>
          <TextListItem><code className='ws-code'>warning</code> to <code className='ws-code'>gold</code></TextListItem>
        </TextList>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Banner variant="danger" />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Banner variant="red" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Button",
    description: (<>Replaced the <code class='ws-code'>isSmall</code> and <code class='ws-code'>isLarge</code> props with the <code class='ws-code'>size</code> prop.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8144",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code className='ws-code'>size</code> prop acceps either <code class='ws-code'>sm</code> or <code class='ws-code'>lg</code> as a value.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Button isSmall />
<Button isLarge />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Button size="sm" />
<Button size="lg" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }, {
    component: "Button",
    description: (<>Replaced the <code class='ws-code'>isSmall</code> and <code class='ws-code'>isLarge</code> props with the <code class='ws-code'>size</code> prop.</>),
    pullRequestURL: "https://github.com/patternfly/patternfly-react/pull/8144",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The <code className='ws-code'>size</code> prop acceps either <code class='ws-code'>sm</code> or <code class='ws-code'>lg</code> as a value.</Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Button isSmall />
<Button isLarge />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Button size="sm" />
<Button size="lg" />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  },
];
