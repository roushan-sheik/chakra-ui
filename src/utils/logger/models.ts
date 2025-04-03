export type LogParameters = Record<string, string | string[] | number | boolean | undefined | null>;

export type ID = string;

type EventMethod = (title: string, action: string, parameters?: LogParameters) => Promise<void> | null;

type SpecificEventMethod = (title: string, parameters?: LogParameters) => Promise<void> | null;

type ViewEventMethod = (parameters?: LogParameters) => Promise<void> | null;

export interface Logger {
  click: SpecificEventMethod;
  confirmed: SpecificEventMethod;
  created: SpecificEventMethod;
  updated: SpecificEventMethod;
  selected: SpecificEventMethod;
  filled: SpecificEventMethod;
  impressed: SpecificEventMethod;
  unimpressed: SpecificEventMethod;
  searched: SpecificEventMethod;
  view: ViewEventMethod;
  event: EventMethod;
  isInitialized: boolean;
}
