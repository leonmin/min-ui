import Vue from 'vue';

export class MinComponent {
  static name: string;
  static install(vue: typeof Vue): void;
}
