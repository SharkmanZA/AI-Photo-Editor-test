<script lang="ts">
	import { Svelvet, Group } from 'svelvet';
	import type { Theme } from 'svelvet';

	let zoom = 0.5;
	let pageWidth = document.body.clientWidth - 50;

	export let name: string;
</script>

<main>
	<h1>Hello {name}!</h1>

	<div class="graph">
	<Svelvet
		edgeStyle="bezier"
		TD
		{zoom}
		minimap
		controls
		width="{pageWidth}"
		height="{600}"
	>
		<Group
			position={{ x: 100, y: 100 }}
			width={600}
			height={700}
			color="red"
			groupName="parameters"
		></Group>

		<Group
			position={{ x: 0, y: 0 }}
			width={600}
			height={700}
			color="goldenrod"
			groupName="asdf"
		></Group>

		<!-- <span id="state" class="note">Stateful Anchors</span> -->
		<!-- <span id="groups" class="note">Group Boxes</span> -->
	</Svelvet>
	</div>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.graph {
		display: block;
		margin: auto;
	}

</style>