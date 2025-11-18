
export interface Swap {
  instead: string;
  of: string;
}

export interface EscalationPath {
  title: string;
  script: string;
}

export interface Scenario {
  id: string;
  title: string;
  isFree: boolean;
  grounding: string;
  openers: string[];
  boundaries: string[];
  swaps: Swap[];
  explanation: string;
  deEscalationSteps: string[];
  escalationPaths: {
    anger: EscalationPath;
    tears: EscalationPath;
    shutdown: EscalationPath;
    demandHead: EscalationPath;
  };
  nextSteps: string[];
  whenToPause: string[];
}

export interface Script {
  id: string;
  text: string;
  isFree: boolean;
}

export interface ScriptCategory {
  title: string;
  scripts: Script[];
}

export interface Template {
  id: string;
  title: string;
  content: string;
  isFree: boolean;
}

export interface Tool {
  id: string;
  title: string;
  content: string | string[];
}
