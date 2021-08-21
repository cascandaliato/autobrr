import React, { Fragment } from "react";
import { SwitchGroup, TextFieldWide } from "../../../components/inputs";
import { NumberFieldWide } from "../../../components/inputs/wide";
import { useField } from "react-final-form";

function FormDefaultClientFields() {
  return (
    <Fragment>
      <TextFieldWide name="host" label="Host" />

      <NumberFieldWide name="port" label="Port" />

      <div className="py-6 px-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-gray-200">
        <SwitchGroup name="ssl" label="SSL" />
      </div>

      <TextFieldWide name="username" label="Username" />
      <TextFieldWide name="password" label="Password" />
    </Fragment>
  );
}

function FormRadarrFields() {
  const { input } = useField("settings.basic.auth");
  return (
    <Fragment>
      <TextFieldWide name="host" label="Host" />

      <TextFieldWide name="settings.apikey" label="API key" />

      <div className="py-6 px-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-gray-200">
        <SwitchGroup name="settings.basic.auth" label="Basic auth" />
      </div>

      {input.value === true && (
        <Fragment>
          <TextFieldWide name="settings.basic.username" label="Username" />
          <TextFieldWide name="settings.basic.password" label="Password" />
        </Fragment>
      )}
    </Fragment>
  );
}

// @ts-ignore
export const componentMap: any = {
  DELUGE_V1: <FormDefaultClientFields />,
  DELUGE_V2: <FormDefaultClientFields />,
  QBITTORRENT: <FormDefaultClientFields />,
  RADARR: <FormRadarrFields />,
};